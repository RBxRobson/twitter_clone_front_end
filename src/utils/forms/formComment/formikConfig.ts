import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Comment } from '../../../types/comment-details';
import { 
  useCreateCommentMutation, 
  useCreateReplyMutation,
  useEditCommentMutation,
  useEditReplyMutation,
} from '../../../services/api';
import { closePublicationModal } from '../../../store/reducers/publicationModal';
import { RootReducer } from '../../../store';

export type FormComment = {
  content: string;
  isReply: boolean;
}

export const useFormComment = (publication?: Comment): ExtendedFormikProps<FormComment> => {
  const { post, comment } = useSelector((state: RootReducer) => state.publicationModal);
  const [createComment, { isLoading: isLoadingComment }] = useCreateCommentMutation();
  const [editComment, { isLoading: isLoadingEditComment }] = useEditCommentMutation();
  const [createReply, { isLoading: isLoadingReply }] = useCreateReplyMutation();
  const [editReply, { isLoading: isLoadingEditReply }] = useEditReplyMutation();
  const isLoading = isLoadingComment || isLoadingReply || isLoadingEditComment || isLoadingEditReply;
  const dispatch = useDispatch();

  const formik = useFormik<FormComment>({
    initialValues: {
      content: publication ? publication.content : '',
      isReply: Boolean(comment)
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      content: Yup.string()
        .required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Chama a API para criar o comentário ou resposta
        if (values.isReply) {
          if (publication) {
            await editReply({
              postId: comment?.post,
              commentId: comment?.id,
              replyId: publication.id,
              commentData: {content: values.content},
            }).unwrap();
          } else {
            await createReply({
              postId: comment?.post,
              commentId: comment?.id,
              commentData: {content: values.content},
            }).unwrap();
          }
        } else {
          if (publication) {
            await editComment({
              postId: comment?.post,
              commentId: publication?.id,
              commentData: {content: values.content},
            }).unwrap();
          } else {
            await createComment({
              postId: post?.id,
              commentData: {content: values.content},
            }).unwrap();
          }
        }
        // Fecha o modal
        dispatch(closePublicationModal());
    
        // Reseta o formulário após o envio
        resetForm();
      } catch {
        alert(
          'Ocorreu um erro desconhecido ao tentar criar o comentário, tente novamente mais tarde.'
        );
      }
    },
  });

  return { ...formik, isLoading };
};

import { useState, useEffect } from 'react';

import { useFollowUserMutation, useUnfollowUserMutation } from '../../../services/api';

export const useFollow = (userId: number, isFollowing: boolean) => {
  const [followingState, setFollowingState] = useState(isFollowing);
  const [loading, setLoading] = useState(false);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  useEffect(() => {
    setFollowingState(isFollowing);
  }, [isFollowing]);

  const toggleFollow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);

    try {
      if (followingState) {
        await unfollowUser(userId);
        setFollowingState(false);
      } else {
        await followUser(userId);
        setFollowingState(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return { followingState, loading, toggleFollow };
};

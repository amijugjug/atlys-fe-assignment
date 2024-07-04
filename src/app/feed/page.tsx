import React from 'react';
import FeedPage from '@/features/FeedPage';
import { DUMMY_POSTS } from '@/dummyData';

const Feed = () => {
  return <FeedPage feedItems={DUMMY_POSTS} />;
};

export default Feed;

interface userProfile {
  name: string;
  createdAt: number;
  isEdited: boolean;
  profileImageUrl: string;
}

interface feedItem {
  profile: userProfile;
  content: string;
  comments: feedItem[];
}
export interface IFeed {
  feedItems: feedItem[];
}

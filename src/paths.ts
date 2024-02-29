const paths = {
  home: () => '/',
  topicView: (slug: string) => `/topics/${slug}`,
  postView: (slug: string, postId: string) => `/topics/${slug}/posts/${postId}`,
  postCreate: (slug: string) => `/topics/${slug}/posts/new`,
};

export default paths;

import { cache } from 'react';
import { db } from '..';

export type CommentWithUser = Awaited<
  ReturnType<typeof fetchCommentsByPostId>
>[number];

export const fetchCommentsByPostId = cache((postId: string) => {
  return db.comment.findMany({
    where: { postId },
    include: { user: { select: { name: true, image: true } } },
  });
});

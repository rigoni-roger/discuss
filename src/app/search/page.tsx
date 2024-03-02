import PostList from '@/components/post/post-list';
import { fetchPostsBySearchTerm } from '@/db/queries/post';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect('/');
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}

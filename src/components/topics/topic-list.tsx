import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <li key={topic.id}>
        <Link href={paths.topicView(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </li>
    );
  });
  return (
    <div>
      <ul className="flex flex-row flex-wrap gap-2 p-2">{renderedTopics}</ul>
    </div>
  );
}

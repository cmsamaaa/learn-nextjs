import Link from 'next/link';

export default function Home() {
  return (
    <ol>
      <li>
        <Link href='/section/1'>Section 1</Link>
      </li>
      <li>
        <Link href='/section/2'>Section 2</Link>
      </li>
    </ol>
  );
}

import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className='m-3 font-bold'>Create a snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label
            className='w-12'
            htmlFor='title'
          >
            Title
          </label>
          <input
            name='title'
            className='p2 w-full rounded border'
            id='title'
          />
        </div>

        <div className='flex gap-4'>
          <label
            className='w-12'
            htmlFor='code'
          >
            Code
          </label>
          <textarea
            name='code'
            className='p2 w-full rounded border'
            id='code'
          />
        </div>

        <button
          type='submit'
          className='rounded bg-blue-200 p-2 hover:bg-blue-400'
        >
          Create
        </button>
      </div>
    </form>
  );
}

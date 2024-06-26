'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });
  return (
    <form action={action}>
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

        {formState.message ? (
          <div className='my-2 rounded border border-red-400 bg-red-200 p-2'>
            {formState.message}
          </div>
        ) : null}

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

'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='ar'>Arabic</option>
        <option value='hi'>Hindi</option>
        <option value='fr'>French</option>
        <option value='es'>Spanish</option>
        <option value='it'>Italian</option>
        <option value='hr'>Croatian</option>
        <option value='tr'>Turkish</option>
        <option value='mt'>Maltese</option>
        <option value='de'>German</option>
        <option value='fil'>philippines</option>
        <option value='ko'>Korean</option>
        <option value='cmn'>Mandarin</option>
      </select>
    </label>
  );
}

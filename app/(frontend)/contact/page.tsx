'use client';

import { Executive } from '@/components/Contact/Card/ExecutiveCard';
import { ExecutiveCollection } from '@/components/Contact/Collection/ExecutiveCollection';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [executives, setExecutives] = useState<Executive[]>([]);
  return (
    //moves the body down from under the header, should probably fix this in layout
    <div style={{ paddingTop: '180px', paddingBottom: '30px' }}>
      <ExecutiveCollection executives={executives}></ExecutiveCollection>
    </div>
  );
}

import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const value = () => {
  const [params, setParams] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setParams(router.query['values']);
  }, [router.query]);
  return (
    // {
    //     params.length
    // }
    <div>this is values of catch all {params}</div>
  );
};

export default value;

//[...values] everything form docs (not docs)
//[[...values]] everything form docs (with docs)

import Spinner from 'components/Spinner/Spinner';
import React, { useMemo } from 'react';
import ReactMarkDown from 'react-markdown';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getMarkdown } from 'store/actions/repoMDAction';

const Markdown: React.FC<MarkDownProps> = ({ repoURL }) => {
  const dispatch = useDispatch();
  const repoMDState = useSelector((state: RootState) => state.repoMD);

  useMemo(() => dispatch(getMarkdown(repoURL)), [dispatch, repoURL]);

  return (
    <>
      {repoMDState.loading ? (
        <Spinner />
      ) : (
        <>
          <h5 style={{ fontSize: '1.5rem' }}>MD of the repository:</h5>
          {repoMDState.data && (
            <ReactMarkDown
              source={repoMDState.data.toString()}
              escapeHtml={true}
              className='issueMD'
            />
          )}
        </>
      )}
    </>
  );
};

export default Markdown;

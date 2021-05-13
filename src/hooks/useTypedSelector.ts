import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

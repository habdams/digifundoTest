import {
    TypedUseSelectorHook,
    useSelector,
    useDispatch,
} from 'react-redux';
import type {
    AppDispatch,
    RootState,
    AppThunk
} from './store';

export const useAppDispatch: TypedUseSelectorHook<AppDispatch> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
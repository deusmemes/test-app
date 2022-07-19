import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../app/store";

export const useTypedSelectorHook: TypedUseSelectorHook<RootState> = useSelector

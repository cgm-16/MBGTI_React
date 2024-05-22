import { atom } from "recoil";

export const questionNumberState = atom({
    key: 'questionNumberState',
    default: 0,
});

export const ansState = atom({
    key: 'ansState',
    default: [] as boolean[],
});

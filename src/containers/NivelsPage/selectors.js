import { createSelector } from 'reselect';

const selectNivelsPage = state => state.get('nivelsPage');

const makeSelectNivels = () => createSelector(
    selectNivelsPage,
    (nivelsPageState) => nivelsPageState.get('nivels')
);


export {
    selectNivelsPage,
    makeSelectNivels
};
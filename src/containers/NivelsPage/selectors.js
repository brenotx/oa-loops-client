import { createSelector } from 'reselect';

const selectNivelsPage = state => state.get('nivelsPage');

const makeSelectNivels = () => createSelector(
    selectNivelsPage,
    (nivelsPageState) => nivelsPageState.get('nivels')
);

const makeSelectUserMaxNivel = () => createSelector(
    selectNivelsPage,
    (nivelsPageState) => nivelsPageState.get('userMaxNivel')
);


export {
    selectNivelsPage,
    makeSelectNivels,
    makeSelectUserMaxNivel
};
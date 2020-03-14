import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selectors'

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }


  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => 
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        } />

        <Route exact path={`${match.path}/:collectionId`} render={(props) =>
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
        } />
      </div>
    );
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
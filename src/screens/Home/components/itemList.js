import React from 'react';
import {FlatList,  RefreshControl } from 'react-native'
import Item  from './item'
const itemList = ({ goToItemDetails, onRefresh, refreshing,onScrollEnd, data }) => {

    const keyExtractor = item => item.id;

    const renderItem = ({ item }) => {
        
        return <Item
            item={item}
            goToItemDetails={goToItemDetails}
        />
    };

    return <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={onScrollEnd}
        refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} />}
    />
}

export default itemList
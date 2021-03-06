import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Colors, Fonts, Metrics, Center} from '../../Config';
import {Header, MovieListCard} from '../../Components';
import {MovieApi} from '../../Services';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieList = (props: any) => {
  const [movieList, setMovieList] = useState<Array<Movie>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      getMovieList(pageNo);
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const getMovieList = async (pageNo: number) => {
    MovieApi.movieList(pageNo).then((res) => {
      setMovieList([...movieList, ...res.results]);
      setLoading(false);
      setTotalPages(res.total_pages);
    });
  };

  const movetoDetailPage = (navigation: any, item: object) => {
    navigation.navigate('MovieDetails', {
      item: item,
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    getMovieList(pageNo).then(() => setRefreshing(false));
  }, []);

  const renderContent = () =>
    movieList.length > 0 ? (
      <FlatList
        data={movieList}
        extraData={movieList}
        refreshControl={
          <RefreshControl
            colors={[Colors.Aqua]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        // onRefresh={() => this.onRefresh()}
        renderItem={({item, index}) => (
          <MovieListCard
            item={item}
            key={index}
            uri={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            onPress={() => movetoDetailPage(props.navigation, item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        // refreshing={this.state.loading}
        onEndReached={(distanceFromEnd) => loadMore()}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() =>
          totalPages !== pageNo ? renderFooter() : null
        }
      />
    ) : (
      <View style={{flex: 1, ...Center}}>
        <Text style={{fontFamily: Fonts.NeusafontMedium, fontSize: 20}}>
          No movies available
        </Text>
      </View>
    );

  const renderLoading = () => (
    <View style={{flex: 1, ...Center}}>
      <Text style={{fontFamily: Fonts.NeusafontMedium, fontSize: 20}}>
        Loading...
      </Text>
    </View>
  );

  const renderFooter = () => {
    console.log(props, 'props');
    return <ActivityIndicator size="large" color={Colors.ButtonPurple} />;
  };

  const loadMore = () => {
    if (totalPages !== pageNo) {
      getMovieList(pageNo + 1);
      setPageNo(pageNo + 1);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.White}}>
      <Header title={'Movie List'} pop={props.navigation.pop} />
      <View style={{flex: 0.9, marginVertical: 10}}>
        {loading ? renderLoading() : renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginHorizontal: 10,
  },
});

export default MovieList;

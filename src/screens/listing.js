import { View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

import DropDown from "../components/inputs/dropdown";
import ListTile from "../components/list-tile";

import { getListing } from "../utils/api-call";

import BottomSheetInput from "../components/inputs/bottom-sheet";
import Pagination from "../components/pagination";
import PageLoader from "../components/loader";
import { getListDataToDisplay } from "../utils/functions";

const Listing = ({
  type,
  requestType = [],
  initialSelectedRequestTypeIndex = 1,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(
    initialSelectedRequestTypeIndex
  );
  const [list, setList] = useState(null);
  const [totalPagesAvailable, setTotalPagesAvailable] = useState(null);
  // const [totalResultsAvailable, setTotalResultsAvailable] = useState(null);
  const [page, setPage] = useState(1);
  const [apiCallActiveStatus, setApiCallActiveStatus] = useState(true);
  const [dropDownSelected, setDropDownSelected] = useState(false);

  const getList = async (pageNumber = 1) => {
    setApiCallActiveStatus(true);
    const { results, total_pages, total_results } = await getListing(
      type,
      requestType[selectedIndex],
      pageNumber
    );
    setList(results);
    setTotalPagesAvailable(total_pages);
    // setTotalResultsAvailable(total_results);
    setPage(1);
    setApiCallActiveStatus(false);
  };

  useEffect(() => {
    (async () => {
      await getList();
    })();
  }, [selectedIndex, type]);

  useEffect(() => {
    (async () => {
      await getList();
    })();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dropdownContainer}>
        <DropDown
          title={requestType[selectedIndex]}
          onPress={() => {
            setDropDownSelected(true);
          }}
        />
      </View>
      {apiCallActiveStatus ? (
        <PageLoader />
      ) : (
        <FlatList
          style={styles.flatList}
          data={[
            ...getListDataToDisplay(page, list),
            { id: -1, isPagination: true },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            !item.isPagination ? (
              <>
                <ListTile
                  id={item.id}
                  title={item.title || item.originalName || item.name} // Movies API does not have title so it will fallback to originalname and added another fallback just in case
                  popularity={item.popularity}
                  date={item.release_date || item.first_air_date}
                  imageUrl={item.poster_path}
                  type={type}
                />
                <View></View>
              </>
            ) : (
              <Pagination
                totalPages={2}
                currentPage={page}
                onPageChange={(newPage) => {
                  setPage(newPage);
                }}
              />
            )
          }
        />
      )}

      <BottomSheetInput
        values={requestType}
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
        }}
        onClose={() => {
          setDropDownSelected(false);
        }}
        isVisible={dropDownSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dropdownContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    marginBottom: 20,
  },
});

export default Listing;

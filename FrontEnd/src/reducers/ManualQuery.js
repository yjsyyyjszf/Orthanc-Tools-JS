import { SET_MANUAL_QUERY_RETRIEVE_STATUS_SERIES, ADD_MANUAL_QUERY_RESULT_TO_LIST, SET_MANUAL_QUERY_RETRIVE_STATUS_STUDY, ADD_MANUAL_QUERY_SERIES_DETAILS } from '../actions/actions-types'

const initialState = {
  manualQueryResults: []
}

export default function manualQueryReducer (state = initialState, action) {
  switch (action.type) {

    case ADD_MANUAL_QUERY_RESULT_TO_LIST:
      let maxKey = Math.max.apply(Math, state.manualQueryResults.map(function (query) { return query.key }))
      maxKey = Math.max(0, maxKey)
      //SK
      let newResults = state.manualQueryResults.slice()
      newResults.push({
        key: (maxKey + 1),
        isRetrieved: false,
        ...action.payload,
        studyOrthancID : '',
        seriesDetails: []
      })
      return {
        ...state,
        manualQueryResults: newResults
      }

    case SET_MANUAL_QUERY_RETRIVE_STATUS_STUDY:
      for (const i in state.manualQueryResults) {
        if (state.results[i].key === action.payload.key) {
          state.results[i].isRetrieved = action.payload.isRetrieved
          break
        }
      }
      return {
        ...state
      }

    case SET_MANUAL_QUERY_RETRIEVE_STATUS_SERIES:
      const newResultArray = state.manualQueryResults.map((studyData) => {
        if (studyData.studyInstanceUID === action.payload.row.studyInstanceUID) {
          studyData.seriesDetails.forEach((serieDetails) => {
            if (serieDetails.serieInstanceUID === action.payload.row.serieInstanceUID) {
              serieDetails.isRetrieved = true
            }
          })
        }
        return studyData
      })
      return {
        ...state,
        manualQueryResults: newResultArray
      }

    case ADD_MANUAL_QUERY_SERIES_DETAILS :
      const seriesDetails = action.payload.seriesDetails
      seriesDetails.forEach((serieItem) => {
        serieItem.isRetrieved = false
        serieItem.key = Math.random()
      })

      const newResultsState = state.manualQueryResults.map((studyData) => {
        if (studyData.studyInstanceUID === action.payload.studyInstanceUID) {
          studyData = {
            ...studyData,
            seriesDetails: seriesDetails
          }
        }
        return studyData
      })

      return {
        ...state,
        manualQueryResults: newResultsState
      }

    default :
      return state
  }
}

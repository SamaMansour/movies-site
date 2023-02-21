import { ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { fetchSort, fetchFilterSortDiscover} from '../../api';


const FilterPage = () => {
  const [genre_id, setGenere_id] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [ sort, setSort] = useState(null);

  return (
    <div className='col-sm-8'>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) =>
          setSort(e.target.options[e.target.selectedIndex].value)
        }
      >
        <option hidden>Sort By</option>
        <option value="original_title.asc">A to Z by The Title</option>
        <option value="original_title.desc">Z to A by The Title</option>
        <option value="popularity.asc">Increasing by Popularity</option>
        <option value="popularity.desc">Decreasing by Popularity</option>
        <option value="release_date.gte">Increasing by Release Date</option>
        <option value="release_date.lte">Decreasing by Release Date</option>
      </select>
      <div className=" d-flex flex-column">
        <h3 className="mt-3">Filter By</h3>
        <label htmlFor="text" className="mt-3">
          From:
        </label>
        <input type="date" onChange={(e) => setToDate(e.target.value)} />
        <label htmlFor="text" className="mt-3">
          To:
        </label>
        <input type="date" onChange={(e) => setFromDate(e.target.value)} />
      </div>
        <ButtonGroup>
          <Button>Action</Button>
          <Button>Adevnture</Button>
          <Button>Romance</Button>
          <Button>Comedy</Button>
          <Button>Drama</Button>
        </ButtonGroup>
      </div>
     
  )
}

export default FilterPage
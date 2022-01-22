import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setCity } from '@ducks/city';

import { TextField, Autocomplete } from '@mui/material';
import { List } from 'react-virtualized';

import citiesList from 'cities-list';

import accents from 'remove-accents';

const CitiesAutocomplete = () => {
  const dispatch = useDispatch();

  const { city } = useSelector((state: ReduxState) => state.city);

  const allCities = Object.keys(citiesList);

  const [list, setList] = useState<any>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '' || search.length <= 2) {
      setList([]);
    } else {
      const aux = allCities.filter(
        (item: string) =>
          item.toLowerCase().indexOf(accents.remove(search.toLowerCase())) >= 0,
      );

      setList(aux);
    }
  }, [search]);

  const ListboxComponent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLElement>
  >((props, ref) => {
    const { children, ...other }: any = props;
    const itemCount = Array.isArray(children) ? children.length : 0;
    const itemSize = 36;

    return (
      <div ref={ref}>
        <div {...other}>
          <List
            height={250}
            width={300}
            rowHeight={itemSize}
            overscanCount={5}
            rowCount={itemCount}
            rowRenderer={(rowProps: any) =>
              React.cloneElement(children[rowProps.index], {
                style: rowProps.style,
              })
            }
            role="listbox"
          />
        </div>
      </div>
    );
  });

  return (
    <Autocomplete
      freeSolo
      value={city}
      onChange={(event: any, newValue: string | null) => {
        dispatch(setCity(newValue));
      }}
      style={{ width: 300 }}
      disableListWrap
      ListboxComponent={ListboxComponent}
      onInputChange={(event, newInputValue) => setSearch(newInputValue)}
      options={list}
      renderInput={(params: any) => (
        <TextField {...params} variant="outlined" label="Cidade" fullWidth />
      )}
    />
  );
};

export default CitiesAutocomplete;

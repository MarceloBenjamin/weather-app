import React, { FormEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setCity, setErrorMessage } from '@ducks/city';

import { List } from 'react-virtualized';

import citiesList from 'cities-list';

import accents from 'remove-accents';

import { SizeMe } from 'react-sizeme';

import { Search } from '@mui/icons-material';
import { TextField, Autocomplete, CircularProgress, Fade } from '@mui/material';

import { Container, ContainerInput, SearchButton } from './styles';

const CitiesAutocomplete = () => {
  const dispatch = useDispatch();

  const { city, loading, errorMessage } = useSelector(
    (state: ReduxState) => state.city,
  );

  const allCities = Object.keys(citiesList);

  const [list, setList] = useState<any>([]);
  const [search, setSearch] = useState('');

  const [inputWidth, setInputWidth] = useState(0);

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
    const itemCount: any = Array.isArray(children) ? children.length : 0;

    return (
      <div ref={ref} style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <div
          {...other}
          style={{
            padding: 0,
            backgroundColor: '#fff',
          }}
        >
          <List
            height={itemCount > 5 ? 250 : itemCount * 48}
            width={inputWidth}
            rowHeight={48}
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

  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: unknown,
  ) => {
    dispatch(setCity(value));
  };

  useEffect(() => {
    setSearch(`${city || ''}`);
    dispatch(setErrorMessage(''));
  }, [city]);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setCity(search));
  };

  return (
    <Container>
      <Fade in timeout={700}>
        <ContainerInput component="form" onSubmit={submit}>
          <SizeMe>
            {({ size }: any) => {
              setInputWidth(size.width);

              return (
                <Autocomplete
                  value={city}
                  inputValue={search}
                  freeSolo
                  openOnFocus
                  disableListWrap
                  disabled={loading}
                  ListboxComponent={ListboxComponent}
                  componentsProps={{
                    paper: {
                      style: {
                        borderRadius: 15,
                        marginTop: 15,
                        boxShadow: '0px 8px 10px rgba(149, 157, 165, 0.2)',
                        backgroundColor: 'rgba(0,0,0,0)',
                      },
                    },
                  }}
                  options={list}
                  onChange={handleOnChange}
                  onInputChange={(event, newInputValue) =>
                    setSearch(newInputValue)
                  }
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      required
                      variant="outlined"
                      label="Pesquise o clima da cidade pelo nome"
                      placeholder="Brasília, São Paulo, New York..."
                      helperText={errorMessage}
                      error={Boolean(errorMessage)}
                    />
                  )}
                  style={{ width: '100%' }}
                />
              );
            }}
          </SizeMe>

          <div>
            <SearchButton disabled={loading} type="submit" variant="outlined">
              {!loading && <Search />}
              {loading && <CircularProgress size={24} />}
            </SearchButton>
          </div>
        </ContainerInput>
      </Fade>
    </Container>
  );
};

export default CitiesAutocomplete;

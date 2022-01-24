/* eslint-disable no-undef */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setAllowed } from '@ducks/geolocation';

import { Container, Row, Info, ErrorText, PermissionButton } from './styles';

const GeolocationHandler: React.FC = () => {
  const dispatch = useDispatch();
  const { allowed, error } = useSelector(
    (state: ReduxState) => state.geolocation,
  );

  const handlePermission = () => {
    dispatch(setAllowed(true));
  };

  return (
    <Container>
      {allowed !== null && allowed === false && (
        <Row>
          <Info color="primary">Obter clima da sua localização atual?</Info>

          <div>
            <PermissionButton
              variant="outlined"
              size="small"
              onClick={handlePermission}
            >
              Sim
            </PermissionButton>
          </div>
        </Row>
      )}

      {error !== null && error === GeolocationPositionError.PERMISSION_DENIED && (
        <ErrorText>
          Não foi possível obter a localização. Atualize a página ou siga as
          instruções deste{' '}
          <a
            target="_blank"
            href="https://support.google.com/chrome/answer/142065?hl=pt-BR&co=GENIE.Platform%3DDesktop"
            rel="noreferrer"
          >
            link
          </a>
          .
        </ErrorText>
      )}

      {error !== null &&
        error === GeolocationPositionError.POSITION_UNAVAILABLE && (
          <ErrorText>
            As informações de localização não estão disponíveis.
          </ErrorText>
        )}

      {error !== null && error === GeolocationPositionError.TIMEOUT && (
        <ErrorText>
          A solicitação para obter a localização do usuário expirou.
        </ErrorText>
      )}
    </Container>
  );
};

export default GeolocationHandler;

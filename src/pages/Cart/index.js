import React from 'react';
import { Container, PokeTable, Total } from './cart.styles';
import swal from 'sweetalert';

export default function Cart() {
  return (
    <Container>
      <div>
        <PokeTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {'123456789'.split('').map((x) => (
              <tr key={x}>
                <td>
                  <img />
                </td>
                <td>
                  <strong>Teste Nome</strong>
                  <span>R$ 20,00</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => console.log('decrement')}
                    >
                      -
                    </button>
                    <input type="number" readOnly value="10" />
                    <button
                      type="button"
                      onClick={() => console.log('increment')}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$10,00</strong>
                </td>
                <td>
                  <button type="button" onClick={() => console.log('remove')}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </PokeTable>
      </div>

      <footer>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 20,00</strong>
        </Total>

        <button
          type="button"
          onClick={() =>
            swal(
              'Compra Finalizada',
              'success',
            )
          }
        >
          {' '}
          Finalizar
        </button>

        
      </footer>
    </Container>
  );
}

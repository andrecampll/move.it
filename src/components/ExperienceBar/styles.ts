import styled from 'styled-components'

export const Wrapper = styled.div`
  header {
    display: flex;
    align-items: center;

    span {
      font-size: 1rem;
    }

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: var(--gray-line);
      margin: 0 1.5rem;
      position: relative;

      > div {
        height: 4px;
        border-radius: 4px;
        background: var(--green);
      }

      > span {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
      }
    }
  }
`

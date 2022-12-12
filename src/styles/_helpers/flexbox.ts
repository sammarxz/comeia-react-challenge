import { css } from 'styled-components'

export const Flexbox = css`
  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .items-end {
    align-items: flex-end;
  }

  .items-start {
    align-items: flex-start;
  }

  .justify-spaceBetween {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .gap-xxsmall {
    gap: 0.4rem;
  }

  .gap-xsmall {
    gap: 0.8rem;
  }

  .gap-small {
    gap: 1rem;
  }

  .gap-medium {
    gap: 1.4rem;
  }

  .gap-large {
    gap: 2rem;
  }
`

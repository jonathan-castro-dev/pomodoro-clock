import { styled } from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .SliderRoot {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 250px;
    height: 20px;
    margin-block: 1rem;
    cursor: pointer;
  }

  .SliderTrack {
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 3px;
    background-color: ${(props) => props.theme.white};
  }

  .SliderRange {
    position: absolute;
    border-radius: 9999px;
    height: 100%;
    background-color: ${(props) => props.theme.white};
  }

  .SliderThumb {
    display: block;
    width: 18px;
    height: 18px;
    box-shadow: 0 2px 10px var(--black-a7);
    border-radius: 10px;
    background-color: ${(props) => props.theme['red-500']};
  }
  .SliderThumb:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.3);
  }

  input {
    width: 250px;
    margin-block: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    margin-top: 1.5rem;

    a {
      border-bottom: 2px solid transparent;
      text-decoration: none;
      font-size: 1.2rem;
      color: ${(props) => props.theme.white};

      &:hover {
        border-color: ${(props) => props.theme['red-500']};
      }
    }

    button {
      border: 0;
      border-radius: 0.25rem;
      padding: 0.5rem 1.8rem;
      font-size: 1.2rem;
      cursor: pointer;

      transition: filter 0.2s;
      background-color: ${(props) => props.theme['red-500']};

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

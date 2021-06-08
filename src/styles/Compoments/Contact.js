import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  border-bottom: 1px solid #eaeaeb;
  padding-bottom: 1.5rem;
  width: 1200px;
  font-size: 22px;
`;

export const SubTitle = styled.div`
  width: 1200px;
  text-align: center;
  margin-top: 1.8rem;

  p {
    margin-top: 1.2rem;
  }
`;

export const ContactArea = styled.div`
  width: 1200px;
  display: flex;
  margin-top: 2.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 275px;
    margin-left: 475px;
  }
  input {
    width: 600px;
    margin-top: 1.2rem;
    height: 36px;

    @media (max-width: 768px) {
      width: 250px;
    }
  }

  input[class="message"] {
    width: 600px;
    height: 250px;
    text-align: start;
    position: relative;

    &::placeholder {
      position: absolute;
      top: 0;
      left: 0;
    }
    @media (max-width: 768px) {
      width: 250px;
    }
  }

  input[class="check"] {
    width: 300px;

    @media (max-width: 768px) {
      width: 250px;
    }
  }

  button {
    width: 240px;
    margin-top: 1.8rem;
    height: 36px;
    border-radius: 0.5rem;
    background: black;
    color: white;
  }
`;

export const Info = styled.div`
  width: 600px;
  margin-left: 5rem;
  @media (max-width: 768px) {
    width: 300px;
    margin-left: 475px;
    margin-top: 50px;
  }
  .ınfo-item {
    display: flex;
    position: relative;
    margin-top: 1.5rem;

    i {
      font-size: 32px;
    }

    p {
      margin-right: 100px;
      position: absolute;
      right: 0;

      @media (max-width: 768px) {
        position: absolute;
        left: 50px;
      }
    }
    hr {
      border: 1px solid red;
    }
  }
`;

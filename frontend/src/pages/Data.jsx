import Table from "../ui/organs/Table";
import Button from "../ui/molecules/Button";
import InputContainer from "../ui/molecules/InputContainer";
import FormContainer from "../ui/organs/FormContainer";

function Data() {
  return (
    <>
      <Table />
      <FormContainer type="primary">
        <FormContainer.Overlay />
        <FormContainer.OpenButton opens="test">
          <Button>Test</Button>
        </FormContainer.OpenButton>

        <FormContainer.Window name="test">
          <FormContainer.Header />

          <InputContainer type="secondary">
            <InputContainer.InputTxt>Hello</InputContainer.InputTxt>
            <InputContainer.Input />
            <InputContainer.InputTxt>Hello</InputContainer.InputTxt>
          </InputContainer>

          <FormContainer.Footer>
            <Button token="md" type="primary">
              Hello
            </Button>
            <FormContainer.CloseButton>
              <Button token="md" type="primary">
                Hello
              </Button>
            </FormContainer.CloseButton>
          </FormContainer.Footer>
        </FormContainer.Window>
      </FormContainer>
    </>
  );
}

export default Data;

import Table from "../ui/organs/Table";
import Button from "../ui/molecules/Button";
import InputContainer from "../ui/molecules/InputContainer";
import FormContainer from "../ui/organs/FormContainer";
import IconDoutone from "../ui/atoms/IconDoutone";
import AnimatedIcon from "../ui/atoms/AnimatedIcon";
import DropDown from "../ui/molecules/DropDown";

import { AddCircleIcon } from "@solar-icons/react/line-duotone/add-circle";

function Data() {
  return (
    <>
      <FormContainer type="secondary">
        <FormContainer.Overlay />

        <FormContainer.OpenButton opens="test">
          <div
            className="
              flex flex-1
              items-center
            "
          >
            <Button>
              Add row
              <IconDoutone size={20} type="primary" Icon={AddCircleIcon} />
            </Button>
          </div>
        </FormContainer.OpenButton>

        <FormContainer.Window name="test">
          <FormContainer.Header />

          <InputContainer type="secondary">
            <InputContainer.InputTxt>Data Source Name</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={null}
              placeholderText="e.g. Sales Dashboard"
            />
            <InputContainer.InputTxt>
              Give this connection a recognizable name.
            </InputContainer.InputTxt>
          </InputContainer>
          <DropDown token="sm" type="primary">
            <DropDown.DropDownButton opens="sync_frequency">
              <Button token="md" type="secondary">
                Provider
                <AnimatedIcon position="right" type="primary" token="md" />
              </Button>
            </DropDown.DropDownButton>
            <DropDown.DropDownUl name="sync_frequency">
              <DropDown.DropDownLi value="google_analytics">
                📊 Google Analytics
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="shopify">
                🛍️ Shopify
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="salesforce">
                ☁️ Salesforce
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="hubspot">
                🎯 HubSpot
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="mysql">🐬 MySQL</DropDown.DropDownLi>
              <DropDown.DropDownLi value="postgresql">
                🐘 PostgreSQL
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="csv_file">
                📄 CSV File
              </DropDown.DropDownLi>
              <DropDown.DropDownLi value="custom_api">
                🔗 Custom API
              </DropDown.DropDownLi>
            </DropDown.DropDownUl>
          </DropDown>

          <InputContainer type="secondary">
            <InputContainer.InputTxt>API Endpoint</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={null}
              placeholderText="https://api.example.com/data"
            />
            <InputContainer.InputTxt>
              Paste the endpoint used to access your data.
            </InputContainer.InputTxt>
          </InputContainer>

          <InputContainer type="secondary">
            <InputContainer.InputTxt>API Key</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={null}
              placeholderText="Enter your API key"
            />
            <InputContainer.InputTxt>
              Your key is stored securely and encrypted.
            </InputContainer.InputTxt>
          </InputContainer>

          <FormContainer.Footer>
            <Button token="md" type="secondary">
              Add Data Source
            </Button>
            <FormContainer.CloseButton>
              <Button token="md" type="secondary">
                Cancel
              </Button>
            </FormContainer.CloseButton>
          </FormContainer.Footer>
        </FormContainer.Window>
      </FormContainer>

      <Table>
        <Table.TableHeader />
        <Table.TableBody />
      </Table>
    </>
  );
}

export default Data;

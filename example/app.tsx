import * as React from "react";
import * as ReactDOM from "react-dom";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import AccordionExample from "./accordion-example";
import ChartExample from "./chart-example";
import DataGridExample from "./data-grid-example";
import EditorExample from "./editor-example";
import Example from "./example-block";
import FormExample from "./form-example";
import ListExample from "./list-example";
import PopupExample from "./popup-example";
import ScrollViewExample from "./scroll-view-example";
import SlideOutViewExample from "./slide-out-view-example";
import TextBoxExample from "./text-box-example";
import ToolbarExample from "./toolbar-example";
import ValidationExample from "./validation-example";

import { Button, NumberBox, Scheduler } from "../src";

import { appointments } from "./data";

ReactDOM.render(
  <div>

    <Example title="DxButton">
      <Button text="Example Button" />
    </Example>

    <PopupExample />

    <TextBoxExample />
    <ToolbarExample />
    <EditorExample />

    <Example title="DxNumberBox">
      <NumberBox
        defaultValue={102.453}
        step={10}
        min={50}
        format={"$ #0.##"}
        showSpinButtons={true}
      />
    </Example>

    <SlideOutViewExample />

    <ScrollViewExample />

    <ValidationExample />

    <FormExample/>

    <ListExample />

    <AccordionExample />

    <DataGridExample/>

    <Example title="DxScheduler">
      <Scheduler
        dataSource={appointments}
        height={400}
        startDayHour={9}
        defaultCurrentView={"week"}
        defaultCurrentDate={new Date(2017, 4, 25)}
      />
    </Example>
    <ChartExample />

    <Example title="Element attributes">
      <Button text="Button with style attr" elementAttr={{ style: "background-color: #ffc" }} />
    </Example>

  </div>,
  document.getElementById("app")
);

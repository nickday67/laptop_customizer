// import React from "react";
// import { shallow } from "enzyme";
// import FeatureOption from "./FeatureOption";

// const shallowRender = props => {
//   // shallow is from enzyme
//   // virtual dom element for Feature Option
//   // props are passed into FeatureOption via spread
//   return shallow(<FeatureOption {...props} />);
// };

// describe("FeatureOption", () => {
//   // it - would be the test case
//   it("should render a grey background if it is selected", () => {
//     // mock out updateFeature because you don't want to reimplement this
//     const updateFeature = jest.fn();
//     // builds a virtual dom element of component
//     const baseComponent = shallowRender({
//       featureKey: "Processor",
//       index: 0,
//       item: {
//         name: "17th Generation Intel Core HB (7 Core with donut spare)",
//         cost: 700
//       },
//       optionName: "17th Generation Intel Core HB (7 Core with donut spare)",
//       updateFeature: updateFeature
//     });
//     // test baseComponent hasStyle background to equal grey
//     expect(baseComponent).toHaveStyleRule("background", "#eee");
//   });
// });

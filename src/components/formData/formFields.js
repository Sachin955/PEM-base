const formFields = {
    title: "Insurance Coverage Form",
    description: "Please provide the required information to get your coverage details.",
    elements: [
      {
        type: "select",
        label: "Tobacco User *",
        name: "tobacco_user",

        options: [
          { val: "select", label: "Select" },
          { val: "Yes", label: "Yes" },
          { val: "No", label: "No" }],
      },
      {
        type: "select",
        label: "Status *",
        name: "status",
        options: [
          { val: "select", label: "Select" },
          { val: "Active", label: "Active" },
          { val: "Cobra", label: "COBRA", },
          { val: "Leave", label: "Leave" }],
      },
      {
        type: "select",
        label: "Who would you like to cover (coverage tier)? *",
        name: "coverage_tier",
        options: [
          { val: "select", label: "Select" },
          { val: "EE_Only", label: "Employee Only" },
          { val: "EE+Spouse", label: "Employee + Spouse/DP" },
          { val: "EE+Child(ren)", label: "Employee + Children" },
          { val: "EE+Family", label: "Employee + Family" }],
        default: "select"
      },
      {
        type: "checkbox",
        label: "Coverage Tier Different for Dental or Vision?",
        name: "coverage_tier_dental_vision",
        checked: false,
      },
      {
        type: "input",
        label: "Home Zip Code *",
        name: "zip_code",
        placeholder: "Enter your home zip code",
      },
      {
        type: "text",
        content:
          "Include your spouse or domestic partner's plan in your comparison analysis by entering their plan cost and key coverage factors. (Optional)",
      },
    ],
  };

  export default formFields;
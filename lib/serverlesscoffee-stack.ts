import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cfninc from "aws-cdk-lib/cloudformation-include";

export class ServerlesscoffeeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const template = new cfninc.CfnInclude(this, "Template", {
      templateFile: "cfn/serverlesspresso-core.yml",
    });
  }
}

import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetStatementResultV2Command, se_GetStatementResultV2Command } from "../protocols/Aws_json1_1";
export { $Command };
export class GetStatementResultV2Command extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RedshiftData", "GetStatementResultV2", {})
    .n("RedshiftDataClient", "GetStatementResultV2Command")
    .f(void 0, void 0)
    .ser(se_GetStatementResultV2Command)
    .de(de_GetStatementResultV2Command)
    .build() {
}

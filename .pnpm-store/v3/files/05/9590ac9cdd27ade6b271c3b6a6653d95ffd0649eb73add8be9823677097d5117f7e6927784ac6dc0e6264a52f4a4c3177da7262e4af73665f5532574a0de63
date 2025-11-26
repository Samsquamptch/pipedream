import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { SESv2ClientResolvedConfig } from "../SESv2Client";
export interface SESv2HttpAuthSchemeParameters
  extends HttpAuthSchemeParameters {
  region?: string;
}
export interface SESv2HttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    SESv2ClientResolvedConfig,
    HandlerExecutionContext,
    SESv2HttpAuthSchemeParameters,
    object
  > {}
export declare const defaultSESv2HttpAuthSchemeParametersProvider: (
  config: SESv2ClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<SESv2HttpAuthSchemeParameters>;
export interface SESv2HttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<SESv2HttpAuthSchemeParameters> {}
export declare const defaultSESv2HttpAuthSchemeProvider: SESv2HttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: SESv2HttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: SESv2HttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;

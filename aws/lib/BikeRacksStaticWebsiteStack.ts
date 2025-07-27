import * as cdk from 'aws-cdk-lib';
import { StaticWebsiteStack, IStaticWebsiteProps } from './StaticWebsiteStack';
const config = require('../config-cdk-bikeracks.json');

export class BikeRacksStaticWebsiteStack extends StaticWebsiteStack {
  constructor(scope: cdk.App, id: string ) {
    const props: IStaticWebsiteProps = {
      websiteDistPath: '../dist',
      deploymentVersion: '1.0.0',
      certificateArn: config.certificateArn,
      domainNames: config.domainNames ? [config.domainNames] : [],
      resourcePrefix: config.resourcePrefix,
      indexDocument: 'index.html',
    };

    super(scope, id, props);
  }
}

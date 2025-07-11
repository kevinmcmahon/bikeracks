#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BikeRacksStaticWebsiteStack } from '../lib/BikeRacksStaticWebsiteStack';

const app = new cdk.App();
new BikeRacksStaticWebsiteStack(app, 'BikeRacksStaticWebsiteStack');

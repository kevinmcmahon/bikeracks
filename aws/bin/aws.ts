#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { BikeRacksStaticWebsiteStack } from '../lib/BikeRacksStaticWebsiteStack';

const app = new cdk.App();
new BikeRacksStaticWebsiteStack(app, 'BikeRacksStaticWebsiteStack');

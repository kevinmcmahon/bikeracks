# Chicago Bike Rack Locator

## What is the purpose of this Chicago Bike Rack Locator?

Find bike racks? More specifically though a toy app to play around with some data the City of Chicago publishes and PostGIS extensions for PostgresDB.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## AWS CDK Stack

This project includes an AWS CDK Stack that can be used to easily deploy the site to AWS. A sample settings file has been provided (`config-cdk-bikeracks.json.example`). The certificateArn is optional but should be provided if the site will leverage AWS provided SSL certificates.

```
{
    "certificateArn": "YOUR_CERTIFICATE_ARN_HERE",
    "domainNames": "exampledomain.com",
    "resourcePrefix": "example-prefix"
}
```

### CDK Useful Commands

 * `yarn run build`   compile typescript to js
 * `yarn run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

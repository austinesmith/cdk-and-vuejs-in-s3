#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoCdkStack } from '../lib/demo-cdk-stack';

const app = new cdk.App();

new DemoCdkStack(app, 'DemoCdkStack', {

    // add aws region to app
    env: {
        region: 'us-east-1',
    },

});
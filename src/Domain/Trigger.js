// @flow

import type { Status } from "./Status";
import type { MetricList } from "./Metric";
import type { Schedule } from "./Schedule";
import type { TriggerSaturation } from "./Saturation";

export type Trigger = {
    id: string,
    is_simple_trigger: boolean,
    name: string,
    targets: Array<string>,
    parents: Array<string>,
    tags: Array<string>,
    patterns: Array<string>,
    expression: string,
    ttl: number,
    ttl_state: Status,
    throttling: number,
    sched?: Schedule,
    desc?: string,
    warn_value: ?number,
    error_value: ?number,
    last_check?: {|
        state: Status,
        timestamp: number,
        metrics: MetricList,
        event_timestamp?: number,
        score: number,
        msg?: string,
    |},
    timestamp?: number,
    is_pull_type?: boolean,
    dashboard?: string,
    has_escalations?: boolean,
    pending_interval?: number,
    saturation: ?Array<TriggerSaturation>,
};

export type TriggerList = {|
    list: ?Array<Trigger>,
    page: number,
    size: number,
    total: number,
|};

export type TriggerState = {|
    metrics: MetricList,
    timestamp: number,
    state: Status,
    score: number,
    trigger_id: string,
    msg?: string,
    maintenance?: number,
|};

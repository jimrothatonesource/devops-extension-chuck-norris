import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as Reporting from "../AdvancedSecurity.Reporting/Reporting";
export declare class ReportingRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    /**
     */
    getUXComputedFilters(): Promise<Reporting.ReportingUXComputedFilters>;
    /**
     * Get Alert summary by severity for the org
     *
     * @param criteria -
     */
    getAlertSummaryForOrg(criteria?: Reporting.FilterCriteria): Promise<Reporting.OrgAlertSummary>;
    /**
     * @param criteria -
     */
    getEnablementSummaryForOrg(criteria?: Reporting.EnablementFilterCriteria): Promise<Reporting.OrgEnablementSummary>;
}

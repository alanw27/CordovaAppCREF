import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Config, NavOutlet, RouteID, RouteWrite, TabButtonClickEventDetail } from '../../interface';
export declare class Tabs implements NavOutlet {
    private transitioning;
    private leavingTab?;
    el: HTMLStencilElement;
    tabs: HTMLIonTabElement[];
    selectedTab?: HTMLIonTabElement;
    config: Config;
    doc: Document;
    /** @internal */
    useRouter: boolean;
    /**
     * Emitted when the tab changes.
     */
    ionChange: EventEmitter<{
        tab: HTMLIonTabElement;
    }>;
    /**
     * Emitted when the navigation will load a component.
     */
    ionNavWillLoad: EventEmitter<void>;
    /**
     * Emitted when the navigation is about to transition to a new component.
     */
    ionNavWillChange: EventEmitter<void>;
    /**
     * Emitted when the navigation has finished transitioning to a new component.
     */
    ionNavDidChange: EventEmitter<void>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    componentWillUpdate(): void;
    protected onTabClicked(ev: CustomEvent<TabButtonClickEventDetail>): void;
    /**
     * Index or the Tab instance, of the tab to select.
     */
    select(tab: string | HTMLIonTabElement): Promise<boolean>;
    /** @internal */
    setRouteId(id: string): Promise<RouteWrite>;
    /** @internal */
    getRouteId(): Promise<RouteID | undefined>;
    /** Get the tab at the given index */
    getTab(tab: string | HTMLIonTabElement): Promise<HTMLIonTabElement | undefined>;
    /**
     * Get the currently selected tab
     */
    getSelected(): Promise<HTMLIonTabElement | undefined>;
    private initSelect;
    private setActive;
    private tabSwitch;
    private notifyRouter;
    private shouldSwitch;
    render(): JSX.Element[];
}

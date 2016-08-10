// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/accordion/accordion.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/accordion/accordion' {
import { QueryList, TemplateRef, EventEmitter, AfterContentChecked } from '@angular/core';
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
export class NgbPanelTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * This directive must be used to wrap accordion panel content.
 */
export class NgbPanelContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * The NgbPanel directive represents an in individual panel with the title and collapsible
 * content
 */
export class NgbPanel {
    /**
     *  A flag determining whether the panel is disabled or not.
     *  When disabled, the panel cannot be toggled.
     */
    disabled: boolean;
    /**
     *  An optional id for the panel. The id should be unique.
     *  If not provided, it will be auto-generated.
     */
    id: string;
    /**
     *  The title for the panel.
     */
    title: string;
    /**
     *  Panel type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     */
    type: string;
    contentTpl: NgbPanelContent;
    titleTpl: NgbPanelTitle;
}
/**
 * The payload of the panel change event
 */
export interface NgbPanelChangeEvent {
    panelId: string;
    nextState: boolean;
    preventDefault(): any;
}
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only panel can be opened at a time.
 */
export class NgbAccordion implements AfterContentChecked {
    _panels: QueryList<NgbPanel>;
    /**
     * An array or comma separated strings of panel identifiers that should be opened
     */
    activeIds: string | string[];
    /**
     *  Whether the other panels should be closed when a panel is opened
     */
    closeOtherPanels: boolean;
    /**
     *  Type of accordion's panels. Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     */
    type: string;
    /**
     * A panel change event fired right before the panel toggle happens. The event object has three properties:
     * 'panelId', the id of panel that id toggled, 'nextState' whether panel will be opened (true) or closed (false),
     * and a function, 'preventDefault()' which, when executed, will prevent the panel toggle from occurring.
     */
    change: EventEmitter<NgbPanelChangeEvent>;
    /**
     * A map that stores each panel state
     */
    private _states;
    /**
     * A map that stores references to all panels
     */
    private _panelRefs;
    ngAfterContentChecked(): void;
    toggle(panelId: string): void;
    private _closeOthers(panelId);
    private _isOpen(panelId);
    private _updateActiveIds();
    private _updateStates();
}
export const NGB_ACCORDION_DIRECTIVES: (typeof NgbAccordion | typeof NgbPanel | typeof NgbPanelTitle)[];
}
declare module '@ng-bootstrap/ng-bootstrap/accordion/accordion' {
export * from '~@ng-bootstrap/ng-bootstrap/accordion/accordion';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/alert/alert.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/alert/alert' {
import { EventEmitter, OnInit, ViewContainerRef, Injector, OnDestroy, ComponentFactoryResolver, Renderer, TemplateRef } from '@angular/core';
/**
 * Alerts can be used to provide feedback messages.
 */
export class NgbAlert {
    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of a cross) will be displayed.
     */
    dismissible: boolean;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     */
    type: string;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     */
    close: EventEmitter<{}>;
    closeHandler(): void;
}
/**
 * Alerts that can be dismissed without any additional code.
 */
export class NgbDismissibleAlert implements OnInit, OnDestroy {
    private _templateRef;
    private _popupService;
    private _windowRef;
    private _timeout;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     */
    type: string;
    /**
     * An event emitted when the close button is clicked.
     */
    closeEvent: EventEmitter<{}>;
    /**
     *  Time, in milliseconds, before the alert auto closes.
     */
    dismissOnTimeout: number;
    constructor(_templateRef: TemplateRef<Object>, viewContainerRef: ViewContainerRef, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer);
    close(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export const NGB_ALERT_DIRECTIVES: (typeof NgbAlert | typeof NgbDismissibleAlert)[];
}
declare module '@ng-bootstrap/ng-bootstrap/alert/alert' {
export * from '~@ng-bootstrap/ng-bootstrap/alert/alert';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/carousel/carousel.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/carousel/carousel' {
import { TemplateRef, OnDestroy, AfterContentChecked, OnInit } from '@angular/core';
/**
 * Represents an individual slide to be used within a carousel.
 */
export class NgbSlide {
    tplRef: TemplateRef<any>;
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     */
    id: string;
    constructor(tplRef: TemplateRef<any>);
}
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
export class NgbCarousel implements AfterContentChecked, OnDestroy, OnInit {
    private _slides;
    private _slideChangeInterval;
    /**
     *  Amount of time in milliseconds before next slide is shown.
     */
    interval: number;
    /**
     *  Whether can wrap from the last to the first slide.
     */
    wrap: boolean;
    /**
     *  A flag for allowing navigation via keyboard
     */
    keyboard: boolean;
    /**
     *  The active slide id.
     */
    activeId: string;
    ngAfterContentChecked(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    select(slideIdx: string): void;
    prev(): void;
    next(): void;
    pause(): void;
    cycle(): void;
    private _keyPrev();
    private _keyNext();
    private _cycleToNext();
    private _cycleToPrev();
    private _cycleToSelected(slideIdx);
    private _restartTimer();
    private _startTimer();
    private _stopTimer();
    private _getSlideById(slideIdx);
    private _getNextSlide(id);
    private _getPrevSlide(id);
}
export const NGB_CAROUSEL_DIRECTIVES: (typeof NgbCarousel | typeof NgbSlide)[];
}
declare module '@ng-bootstrap/ng-bootstrap/carousel/carousel' {
export * from '~@ng-bootstrap/ng-bootstrap/carousel/carousel';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/collapse/collapse.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/collapse/collapse' {
/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
export class NgbCollapse {
    /**
     * A flag indicating collapsed (true) or open (false) state.
     */
    collapsed: boolean;
}
export const NGB_COLLAPSE_DIRECTIVES: typeof NgbCollapse[];
}
declare module '@ng-bootstrap/ng-bootstrap/collapse/collapse' {
export * from '~@ng-bootstrap/ng-bootstrap/collapse/collapse';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/dropdown/dropdown.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/dropdown/dropdown' {
import { EventEmitter } from '@angular/core';
/**
 * Transforms a node into a dropdown.
 */
export class NgbDropdown {
    /**
     * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
     */
    autoClose: boolean;
    /**
     *  Defines whether or not the dropdown-menu is open initially.
     */
    private _open;
    /**
     *  An event fired when the dropdown is opened or closed.
     *  Event's payload equals whether dropdown is open.
     */
    openChange: EventEmitter<{}>;
    isOpen(): boolean;
    open(): void;
    close(): void;
    toggle(): void;
    private _closeFromOutside();
}
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
export class NgbDropdownToggle {
    private _dropdown;
    constructor(_dropdown: NgbDropdown);
    toggleOpen($event: any): void;
}
export const NGB_DROPDOWN_DIRECTIVES: (typeof NgbDropdownToggle | typeof NgbDropdown)[];
}
declare module '@ng-bootstrap/ng-bootstrap/dropdown/dropdown' {
export * from '~@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/pagination/pagination.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/pagination/pagination' {
import { EventEmitter, OnChanges } from '@angular/core';
/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
export class NgbPagination implements OnChanges {
    private _boundaryLinks;
    private _collectionSize;
    private _directionLinks;
    private _ellipses;
    private _maxSize;
    private _page;
    private _pageCount;
    private _pageSize;
    private _rotate;
    pages: number[];
    /**
     *  Whether to show the "First" and "Last" page links
     */
    boundaryLinks: boolean;
    /**
     *  Whether to show the "Next" and "Previous" page links
     */
    directionLinks: boolean;
    /**
     *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
     */
    ellipses: boolean;
    /**
     *  Number of items in collection.
     */
    collectionSize: number | string;
    /**
     *  Maximum number of pages to display
     */
    maxSize: number | string;
    /**
     *  Current page.
     */
    page: number | string;
    /**
     *  Number of items per page.
     */
    pageSize: number | string;
    /**
     *  An event fired when the page is changed.
     *  Event's payload equals the current page.
     */
    pageChange: EventEmitter<{}>;
    /**
     *  Whether to rotate pages when maxSize > number of pages.
     *  Current page will be in the middle
     */
    rotate: boolean;
    /**
     * Pagination display size: small or large
     */
    size: 'sm' | 'lg';
    hasPrevious(): boolean;
    hasNext(): boolean;
    selectPage(pageNumber: number): void;
    ngOnChanges(): void;
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    private _applyEllipses(start, end);
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    private _applyRotation();
    /**
     * Paginates page numbers based on maxSize items per page
     */
    private _applyPagination();
    private _isEllipsis(pageNumber);
    private _getPageNoInRange(newPageNo);
}
export const NGB_PAGINATION_DIRECTIVES: typeof NgbPagination[];
}
declare module '@ng-bootstrap/ng-bootstrap/pagination/pagination' {
export * from '~@ng-bootstrap/ng-bootstrap/pagination/pagination';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/progressbar/progressbar.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/progressbar/progressbar' {
/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
export class NgbProgressbar {
    /**
     * Maximal value to be displayed in the progressbar.
     */
    max: number;
    /**
     * A flag indicating if a progress bar should be animated when the value changes. Takes effect only for browsers
     * supporting CSS3 animations.
     */
    animated: boolean | string;
    /**
     * A flag indicating if a progress bar should be displayed as striped.
     */
    striped: boolean | string;
    /**
     * Type of progress bar, can be one of "success", "info", "warning" or "danger".
     */
    type: string;
    /**
     * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
     */
    value: number;
    isAnimated(): boolean;
    isStriped(): boolean;
    getValue(): number;
    getPercentValue(): number;
}
export const NGB_PROGRESSBAR_DIRECTIVES: typeof NgbProgressbar[];
}
declare module '@ng-bootstrap/ng-bootstrap/progressbar/progressbar' {
export * from '~@ng-bootstrap/ng-bootstrap/progressbar/progressbar';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/rating/rating.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/rating/rating' {
import { EventEmitter, OnInit } from '@angular/core';
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
export class NgbRating implements OnInit {
    private _oldRate;
    range: number[];
    /**
     * Maximal rating that can be given using this widget.
     */
    max: number;
    /**
     * Current rating.
     */
    rate: number;
    /**
     * A flag indicating if rating can be updated.
     */
    readonly: boolean;
    /**
     * An event fired when a user is hovering over a given rating.
     * Event's payload equals to the rating being hovered over.
     */
    hover: EventEmitter<number>;
    /**
     * An event fired when a user stops hovering over a given rating.
     * Event's payload equals to the rating of the last item being hovered over.
     */
    leave: EventEmitter<number>;
    /**
     * An event fired when a user selects a new rating.
     * Event's payload equals to the newly selected rating.
     */
    rateChange: EventEmitter<number>;
    enter(value: number): void;
    ngOnInit(): void;
    reset(): void;
    update(value: number): void;
    private _buildTemplateObjects();
}
export const NGB_RATING_DIRECTIVES: typeof NgbRating[];
}
declare module '@ng-bootstrap/ng-bootstrap/rating/rating' {
export * from '~@ng-bootstrap/ng-bootstrap/rating/rating';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/tabset/tabset.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/tabset/tabset' {
import { QueryList, TemplateRef, AfterContentChecked, EventEmitter } from '@angular/core';
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
export class NgbTabTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
export class NgbTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * A directive representing an individual tab.
 */
export class NgbTab {
    /**
     * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
     */
    id: string;
    /**
     * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
     */
    title: string;
    /**
     * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
     */
    disabled: boolean;
    contentTpl: NgbTabContent;
    titleTpl: NgbTabTitle;
}
/**
 * The payload of the tab change event
 */
export interface NgbTabChangeEvent {
    activeId: string;
    nextId: string;
    preventDefault(): any;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
export class NgbTabset implements AfterContentChecked {
    tabs: QueryList<NgbTab>;
    /**
     * An identifier of a tab that should be selected (active).
     */
    activeId: string;
    /**
     * Type of navigation to be used for tabs. Can be one of 'tabs' or 'pills'.
     */
    type: string;
    /**
     * A tab change event fired right before the tab selection happens.  The event object has three properties:
     * 'activeId', the id of the currently active tab, 'nextId' the id of the newly selected tab, and a function,
     * 'preventDefault()' which, when executed, will prevent the tab change from occurring.
     */
    change: EventEmitter<NgbTabChangeEvent>;
    select(tabIdx: string): void;
    ngAfterContentChecked(): void;
    private _getTabById(id);
}
export const NGB_TABSET_DIRECTIVES: (typeof NgbTabset | typeof NgbTab | typeof NgbTabContent)[];
}
declare module '@ng-bootstrap/ng-bootstrap/tabset/tabset' {
export * from '~@ng-bootstrap/ng-bootstrap/tabset/tabset';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/timepicker/timepicker.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/timepicker/timepicker' {
import { ControlValueAccessor } from '@angular/common';
/**
 * A lightweight & configurable timepicker directive.
 */
export class NgbTimepicker implements ControlValueAccessor {
    private model;
    /**
     * Whether to display 12H or 24H mode.
     */
    meridian: boolean;
    /**
     * Whether to display seconds input.
     */
    seconds: boolean;
    /**
     * Number of hours to increase or decrease when using a button.
     */
    hourStep: number;
    /**
     * Number of minutes to increase or decrease when using a button.
     */
    minuteStep: number;
    /**
     * Number of seconds to increase or decrease when using a button.
     */
    secondStep: number;
    /**
     * To disable timepicker
     */
    disabled: boolean;
    /**
     * To make timepicker readonly
     */
    readonlyInputs: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    changeHour(step: number): void;
    changeMinute(step: number): void;
    changeSecond(step: number): void;
    updateHour(newVal: string | number): void;
    updateMinute(newVal: string | number): void;
    updateSecond(newVal: string | number): void;
    toggleMeridian(): void;
    private formatHour(value);
    private formatMinSec(value);
    private propagateModelChange();
}
export const NGB_TIMEPICKER_DIRECTIVES: typeof NgbTimepicker[];
}
declare module '@ng-bootstrap/ng-bootstrap/timepicker/timepicker' {
export * from '~@ng-bootstrap/ng-bootstrap/timepicker/timepicker';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/tooltip/tooltip.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/tooltip/tooltip' {
import { OnInit, AfterViewChecked, OnDestroy, Injector, Renderer, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
export class NgbTooltipWindow {
    placement: string;
}
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
export class NgbTooltip implements OnInit, AfterViewChecked, OnDestroy {
    private _elementRef;
    private _renderer;
    /**
     * Content to be displayed as tooltip.
     */
    ngbTooltip: string | TemplateRef<any>;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     */
    placement: string;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     */
    triggers: string;
    private _popupService;
    private _positioning;
    private _windowRef;
    private _unregisterListenersFn;
    constructor(_elementRef: ElementRef, _renderer: Renderer, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    open(): void;
    close(): void;
    toggle(): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
export const NGB_TOOLTIP_DIRECTIVES: typeof NgbTooltip[];
}
declare module '@ng-bootstrap/ng-bootstrap/tooltip/tooltip' {
export * from '~@ng-bootstrap/ng-bootstrap/tooltip/tooltip';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/typeahead/typeahead.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead' {
import { OnInit, ComponentFactoryResolver, ViewContainerRef, Injector, Renderer, ElementRef, TemplateRef, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/let';
import { ResultTplCtx } from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { ControlValueAccessor } from '@angular/common';
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
export class NgbTypeahead implements OnInit, AfterViewChecked, ControlValueAccessor {
    private _elementRef;
    private _viewContainerRef;
    private _renderer;
    private _injector;
    private _onChangeNoEmit;
    private _popupService;
    private _positioning;
    private _valueChanges;
    private _windowRef;
    /**
     * A function to convert a given value into string to display in the input field
     */
    inputFormatter: (value) => string;
    /**
     * A function to transform the provided observable text into the array of results
     */
    ngbTypeahead: (text: Observable<string>) => Observable<any[]>;
    /**
     * A function to format a given result before display. This function should return a formatted string without any
     * HTML markup.
     */
    resultFormatter: (value) => string;
    /**
     * A template to display a matching result.
     */
    resultTemplate: TemplateRef<ResultTplCtx>;
    onChange: (value: any) => void;
    onTouched: () => void;
    constructor(_elementRef: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer, _injector: Injector, componentFactoryResolver: ComponentFactoryResolver);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    private _closePopup();
    private _handleKeyDown(event);
    private _openPopup();
    private _selectResult(result);
}
export const NGB_TYPEAHEAD_DIRECTIVES: typeof NgbTypeahead[];
}
declare module '@ng-bootstrap/ng-bootstrap/typeahead/typeahead' {
export * from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/util/util.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/util/util' {
export function toBoolean(value: any): boolean;
export function toInteger(value: any): number;
export function toString(value: any): string;
export function getValueInRange(value: number, max: number, min?: number): number;
export function isString(value: any): boolean;
export function isNumber(value: any): boolean;
export function padNumber(value: number): string;
export function regExpEscape(text: any): any;
}
declare module '@ng-bootstrap/ng-bootstrap/util/util' {
export * from '~@ng-bootstrap/ng-bootstrap/util/util';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/typeahead/typeahead-window.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window' {
import { EventEmitter, TemplateRef } from '@angular/core';
import { toString } from '~@ng-bootstrap/ng-bootstrap/util/util';
export class ResultTplCtx {
    result: any;
    term: string;
    formatter: (result) => string;
    constructor(result: any, term: string, formatter: (result) => string);
}
export class NgbTypeaheadWindow {
    private _activeIdx;
    /**
     * Aria-labelledby attribute value
     */
    ariaLabelledBy: any;
    /**
     * Typeahead match results to be displayed
     */
    results: any;
    /**
     * Search term used to get current results
     */
    term: any;
    /**
     * A function used to format a given result before display. This function should return a formated string without any
     * HTML markup.
     */
    formatter: typeof toString;
    /**
     * A template to display a matching result.
     */
    resultTemplate: TemplateRef<ResultTplCtx>;
    /**
     * Event raised when users selects a particular result row.
     */
    selectEvent: EventEmitter<{}>;
    getActive(): any;
    markActive(_activeIdx: number): void;
    next(): void;
    prev(): void;
    select(item: any): void;
    private _prepareTplCtx(result);
}
}
declare module '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window' {
export * from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/popover/popover.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/popover/popover' {
import { OnInit, AfterViewChecked, OnDestroy, Injector, Renderer, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
export class NgbPopoverWindow {
    placement: string;
    title: string;
}
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export class NgbPopover implements OnInit, AfterViewChecked, OnDestroy {
    private _elementRef;
    private _renderer;
    /**
     * Content to be displayed as popover.
     */
    ngbPopover: string | TemplateRef<any>;
    /**
     * Title of a popover.
     */
    title: string;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     */
    placement: string;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     */
    triggers: string;
    private _popupService;
    private _positioning;
    private _windowRef;
    private _unregisterListenersFn;
    constructor(_elementRef: ElementRef, _renderer: Renderer, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    open(): void;
    close(): void;
    toggle(): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
export const NGB_POPOVER_DIRECTIVES: typeof NgbPopover[];
}
declare module '@ng-bootstrap/ng-bootstrap/popover/popover' {
export * from '~@ng-bootstrap/ng-bootstrap/popover/popover';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/buttons/radio.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/buttons/radio' {
import { Renderer, ElementRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/common';
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
export class NgbRadioGroup implements ControlValueAccessor {
    private _radios;
    private _value;
    onChange: (_: any) => void;
    onTouched: () => void;
    onRadioChange(radio: NgbRadio): void;
    onRadioValueUpdate(): void;
    register(radio: NgbRadio): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    unregister(radio: NgbRadio): void;
    writeValue(value: any): void;
    private _updateRadios();
}
export class NgbRadioLabel {
    checked: boolean;
}
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
export class NgbRadio implements OnDestroy {
    private _group;
    private _label;
    private _renderer;
    private _element;
    private _value;
    private _checked;
    /**
     * You can specify model value of a given radio by binding to the value property.
    */
    value: any;
    constructor(_group: NgbRadioGroup, _label: NgbRadioLabel, _renderer: Renderer, _element: ElementRef);
    markChecked(value: any): void;
    ngOnDestroy(): void;
    onChange(): void;
}
export const NGB_RADIO_DIRECTIVES: (typeof NgbRadio | typeof NgbRadioLabel | typeof NgbRadioGroup)[];
}
declare module '@ng-bootstrap/ng-bootstrap/buttons/radio' {
export * from '~@ng-bootstrap/ng-bootstrap/buttons/radio';
}

// Generated by typings
// Source: jspm_packages/npm/@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1/index.d.ts
declare module '~@ng-bootstrap/ng-bootstrap/index' {
import { NgbAccordion, NgbPanel, NgbPanelTitle } from '~@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { NgbAlert, NgbDismissibleAlert } from '~@ng-bootstrap/ng-bootstrap/alert/alert';
import { NgbCarousel, NgbSlide } from '~@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { NgbCollapse } from '~@ng-bootstrap/ng-bootstrap/collapse/collapse';
import { NgbDropdown, NgbDropdownToggle } from '~@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { NgbPagination } from '~@ng-bootstrap/ng-bootstrap/pagination/pagination';
import { NgbProgressbar } from '~@ng-bootstrap/ng-bootstrap/progressbar/progressbar';
import { NgbRating } from '~@ng-bootstrap/ng-bootstrap/rating/rating';
import { NgbTabset, NgbTab, NgbTabContent } from '~@ng-bootstrap/ng-bootstrap/tabset/tabset';
import { NgbTimepicker } from '~@ng-bootstrap/ng-bootstrap/timepicker/timepicker';
import { NgbTooltip, NgbTooltipWindow } from '~@ng-bootstrap/ng-bootstrap/tooltip/tooltip';
import { NgbTypeahead } from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
import { NgbTypeaheadWindow } from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { NgbPopover } from '~@ng-bootstrap/ng-bootstrap/popover/popover';
import { NgbRadioGroup, NgbRadioLabel, NgbRadio } from '~@ng-bootstrap/ng-bootstrap/buttons/radio';
export { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelChangeEvent, NGB_ACCORDION_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/accordion/accordion';
export { NgbAlert, NgbDismissibleAlert, NGB_ALERT_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/alert/alert';
export { NgbCarousel, NgbSlide, NGB_CAROUSEL_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/carousel/carousel';
export { NgbCollapse, NGB_COLLAPSE_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/collapse/collapse';
export { NgbDropdown, NgbDropdownToggle, NGB_DROPDOWN_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
export { NgbPagination, NGB_PAGINATION_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/pagination/pagination';
export { NgbProgressbar, NGB_PROGRESSBAR_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/progressbar/progressbar';
export { NgbRating, NGB_RATING_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/rating/rating';
export { NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTabChangeEvent, NGB_TABSET_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/tabset/tabset';
export { NgbTimepicker, NGB_TIMEPICKER_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/timepicker/timepicker';
export { NgbTooltip, NgbTooltipWindow, NGB_TOOLTIP_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/tooltip/tooltip';
export { NgbTypeahead, NGB_TYPEAHEAD_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
export { NgbPopover, NgbPopoverWindow, NGB_POPOVER_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/popover/popover';
export { NgbRadioGroup, NgbRadioLabel, NgbRadio, NGB_RADIO_DIRECTIVES } from '~@ng-bootstrap/ng-bootstrap/buttons/radio';
export const NGB_DIRECTIVES: ((typeof NgbAccordion | typeof NgbPanel | typeof NgbPanelTitle)[] | (typeof NgbAlert | typeof NgbDismissibleAlert)[] | (typeof NgbCarousel | typeof NgbSlide)[] | typeof NgbCollapse[] | (typeof NgbDropdownToggle | typeof NgbDropdown)[] | typeof NgbPagination[] | typeof NgbProgressbar[] | typeof NgbRating[] | (typeof NgbTabset | typeof NgbTab | typeof NgbTabContent)[] | typeof NgbTimepicker[] | typeof NgbTooltip[] | typeof NgbTypeahead[] | typeof NgbPopover[] | (typeof NgbRadio | typeof NgbRadioLabel | typeof NgbRadioGroup)[])[];
export const NGB_PRECOMPILE: (typeof NgbAlert | typeof NgbTooltipWindow | typeof NgbTypeaheadWindow)[];
}
declare module '@ng-bootstrap/ng-bootstrap/index' {
export * from '~@ng-bootstrap/ng-bootstrap/index';
}
declare module '@ng-bootstrap/ng-bootstrap' {
export * from '~@ng-bootstrap/ng-bootstrap/index';
}

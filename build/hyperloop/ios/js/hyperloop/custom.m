/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2017 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */

@interface HyperloopPointer : NSObject
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding;
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding framework:(NSString *)framework classname:(NSString *)classname;
-(void *)pointerValue;
-(SEL)selectorValue;
-(Class)classValue;
-(id)objectValue;
@end

@interface HyperloopUtils : NSObject
+(id)invokeCustomCallback:(NSArray *)args identifier:(NSString *)identifier thisObject:(id)thisObject;
@end



/**
 * mapping of custom class to module path
 */
@interface HyperloopCustomClassMapping : NSObject
@end

@implementation HyperloopCustomClassMapping

+(NSString *)mappingForClass: (NSString *)classname {
	static NSDictionary *mappings = nil;
	if (mappings == nil) {
		mappings = [NSDictionary dictionaryWithObjects:@[]
								 forKeys:@[]];
	}
	return [mappings objectForKey:classname];
}

@end
